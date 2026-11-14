#!/usr/bin/env bash
# PreToolUse hook for Bash. Blocks `git commit` until the pending changes have
# been through the code-quality-review skill. `--mark` records the current
# change set as reviewed. State lives inside .git, so it is never committed.

set -euo pipefail

cd "${CLAUDE_PROJECT_DIR:-$(git rev-parse --show-toplevel)}"

STATE_FILE="$(git rev-parse --git-dir)/claude-review-hash"
# Data and asset changes are exempt from the structural review.
EXEMPT_PATTERN='^(src/lib/data/|public/)'

current_hash() {
    git diff HEAD | shasum | cut -d' ' -f1
}

if [ "${1:-}" = "--mark" ]; then
    current_hash > "$STATE_FILE"
    echo "Marked current changes as reviewed."
    exit 0
fi

command="$(jq -r '.tool_input.command // empty')"

if ! printf '%s' "$command" | grep -Eq '(^|[;&|(]|[[:space:]])git([[:space:]]+-C[[:space:]]+[^[:space:]]+)?[[:space:]]+commit([[:space:]]|$)'; then
    exit 0
fi

changed_files="$(git diff HEAD --name-only)"

if [ -z "$changed_files" ] || ! printf '%s\n' "$changed_files" | grep -Evq "$EXEMPT_PATTERN"; then
    exit 0
fi

if [ -f "$STATE_FILE" ] && [ "$(cat "$STATE_FILE")" = "$(current_hash)" ]; then
    exit 0
fi

cat >&2 <<'MSG'
Commit blocked: these changes have not been through the code quality review.

1. Run the code-quality-review skill (Skill tool) on the pending changes. It reviews AND fixes every finding directly, without asking for approval unless a change is truly controversial.
2. When it finishes and validation passes, run: .claude/hooks/pre-commit-review.sh --mark
3. If the review edited files that were already staged, re-stage just those files (the user asked for this commit, which authorizes it), then retry the commit. Do not stage anything else.
MSG
exit 2
