import {prisma} from "@/prisma/prisma-client";
import {hashSync} from 'bcrypt'

async function up() {

    await prisma.user.createMany({
        data: [
            {
                fullName: "John",
                email: "john@example.com",
                password: hashSync("123456", 10),
                verified: new Date(),
                role: 'USER'
            },
            {
                fullName: "admin",
                email: "admin@example.com",
                password: hashSync("123456", 10),
                verified: new Date(),
                role: 'ADMIN'
            }
        ]
    })

}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
}

main().then(async () =>{
    await prisma.$disconnect();
})