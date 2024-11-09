import { defineAction } from "astro:actions"
import { prisma } from "../../db";


export const getPlaces = defineAction({
  accept: 'json',
  handler: async () => {
    try {
      const places = await prisma.place.findMany()
      return places;
    } catch (error) {
      console.error(error)
      throw 'Error'
    }
  }
})
