// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    manga: {
      title: "Sponsbobby",
      episode: {
        total: 1,
        last: 2,
        title: "EP1 - Sponsbobby Holiday",
        previous: false,
        next: true,
      },
      info: {
        desc: "Sponsbobby waiting for Sundy and Fatrix for Holiday to Singaparna, Geroy turn into humanoid slimy shumi and had battle with Stoner, the hause of Fatrix. Whilst Mr Krobbie find his magic coin, so what's next, read on MangaCuk...",
        category: "Comedy",
        age: 13,
        release: "1 week"
      },
      episodes: [
        {
          id: 1,
          episode: "EP1 - Sponsbobby Holiday"
        }
      ],
      subscribe: false,
    },
    like: 1000,
    subscribe: 200
  })
}
