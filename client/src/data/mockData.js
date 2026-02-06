// Ce fichier simule la réponse de ton futur Backend
export const MOCK_FILMS = [
  {
    id: 1,
    title: "Les Ombres du Passé",
    director: "Sarah Connor",
    email: "sarah@skynet.com",
    country: "France",
    status: "PENDING", // ENUM: PENDING, APPROVED, REJECTED, TO_MODIFY
    submittedAt: "2023-10-24T10:00:00Z",
    youtubeUrl: "https://youtu.be/xyz123",
    rating: null, // Pas encore noté
    aiTools: "Midjourney, Runway Gen-2",
  },
  {
    id: 2,
    title: "Neon Dreams",
    director: "John Doe",
    email: "john@doe.com",
    country: "USA",
    status: "APPROVED",
    submittedAt: "2023-10-23T14:30:00Z",
    youtubeUrl: "https://youtu.be/abc456",
    rating: 8.5, // Note moyenne
    aiTools: "DALL-E 3, Pika Labs",
  },
  {
    id: 3,
    title: "Echoes of Silence",
    director: "Maria Garcia",
    email: "maria@cine.es",
    country: "Spain",
    status: "REJECTED",
    submittedAt: "2023-10-20T09:15:00Z",
    youtubeUrl: "https://youtu.be/def789",
    rating: 2.0,
    aiTools: "Stable Diffusion",
  },
  {
    id: 4,
    title: "Cyber Apero",
    director: "Antoine Daniel",
    email: "antoine@lool.fr",
    country: "France",
    status: "TO_MODIFY", // Demande de modif
    submittedAt: "2023-10-25T16:45:00Z",
    youtubeUrl: "https://youtu.be/ghi012",
    rating: null,
    aiTools: "Kaiber",
  },
];

export const KPI_STATS = {
  total: 42,
  pending: 12,
  approved: 8,
  rejected: 5,
};
