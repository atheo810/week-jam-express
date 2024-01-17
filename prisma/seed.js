// make seeder ( sesi-5 )
// make prismaClient ( sesi-5 )
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// list data seed for book ( sesi-5 )
const books = [
  {
    judul_buku: "Kuzu no Honkai",
    deskripsi: "Buku Anime yang menceritakan proses kedewasaan ",
    category: "Romance",
  },
  {
    judul_buku: "Redo Healing Heroes",
    deskripsi: "Buku Anime yang menceritakan perjuangan pahlawan",
    category: "Romance",
  },
  {
    judul_buku: "Tatte no Yuusha",
    deskripsi:
      "Buku Anime yang menceritakan perjuangan seorang pengguna perissai dari tirani kerajaan",
    category: "Romance",
  },
  {
    judul_buku: "Magika madoka",
    deskripsi:
      "Buku Anime yang menceritakan perjuangan seorang pengulang waktu yang menyelamatkan temannya",
    category: "Friendship",
  },
];

// define asychronus function for seeding database ( sesi-5 )
async function main() {
  books.forEach(async (book) => {
    await prisma.book.create({
      data: book,
    });
  });
  console.log("Seed data success");
}

// run function main ( sesi-5 )
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
