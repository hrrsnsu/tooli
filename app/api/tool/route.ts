import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    const body = await req.json();
    const { name, description, user } = body;

    const prismaUser = await prisma.user.findUnique({
        where: { email: user.email },
        select: { id: true },
    });

    if (prismaUser) {
        try {
            const tool = await prisma.tool.create({
                data: {
                    name,
                    description,
                    package: Buffer.from('test'),
                    creator: { connect: { id: prismaUser.id } },
                },
            });
            return Response.json(tool);
        } catch (err) {
            return Response.json({ status: 500, error: err });
        }
    } else {
        Response.json({ status: 500, message: 'Unable to link a user' });
    }
}
