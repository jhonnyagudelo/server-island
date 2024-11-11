import { defineAction } from "astro:actions";

export const getAvailabilityById = defineAction({
  accept: "json",
  handler: async (placeId) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const isAvailability = Math.random() > 0.5;
    const spotsAvailable = Math.floor(Math.random() * 10) + 1;

    let message = "No hay espacio disponibles";

    if (isAvailability) {
      message =
        spotsAvailable > 1
          ? `${spotsAvailable} espacios disponibles`
          : `1 espacio dispobile`;
    }

    return {
      id: placeId,
      isAvailable: isAvailability,
      message,
    };
  },
});
