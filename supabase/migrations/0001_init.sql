-- Per-user run progress, one row per (user, game).
create table runs (
    user_id uuid not null references auth.users (id) on delete cascade,
    game_slug text not null,
    data jsonb not null,
    updated_at timestamptz not null default now(),
    primary key (user_id, game_slug)
);

alter table runs enable row level security;

create policy "own rows" on runs
    for all
    using (auth.uid() = user_id)
    with check (auth.uid() = user_id);

-- One row per Hall of Fame entry (a run's team snapshot at a given attempt).
create table hall_of_fame_entries (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references auth.users (id) on delete cascade,
    game_slug text not null,
    attempt integer not null,
    team jsonb not null
);

alter table hall_of_fame_entries enable row level security;

create policy "own rows" on hall_of_fame_entries
    for all
    using (auth.uid() = user_id)
    with check (auth.uid() = user_id);

-- Per-battle notes, one row per (user, game, battle).
create table notes (
    user_id uuid not null references auth.users (id) on delete cascade,
    game_slug text not null,
    battle_key text not null,
    note text not null,
    primary key (user_id, game_slug, battle_key)
);

alter table notes enable row level security;

create policy "own rows" on notes
    for all
    using (auth.uid() = user_id)
    with check (auth.uid() = user_id);

-- App settings toggles, one row per (user, setting).
create table settings (
    user_id uuid not null references auth.users (id) on delete cascade,
    setting_id text not null,
    value boolean not null,
    primary key (user_id, setting_id)
);

alter table settings enable row level security;

create policy "own rows" on settings
    for all
    using (auth.uid() = user_id)
    with check (auth.uid() = user_id);
