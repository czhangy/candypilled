import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    const { x, y } = await request.json();

    console.log(`[log-coordinates] x: ${x}, y: ${y}`);

    return NextResponse.json({ x, y });
};
