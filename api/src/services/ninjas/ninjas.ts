import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const ninjas = () => {
  return db.ninja.findMany()
}

export const ninja = ({ id }: Prisma.NinjaWhereUniqueInput) => {
  return db.ninja.findUnique({
    where: { id },
  })
}

interface CreateNinjaArgs {
  input: Prisma.NinjaCreateInput
}

export const createNinja = ({ input }: CreateNinjaArgs) => {
  return db.ninja.create({
    data: input,
  })
}

interface UpdateNinjaArgs extends Prisma.NinjaWhereUniqueInput {
  input: Prisma.NinjaUpdateInput
}

export const updateNinja = ({ id, input }: UpdateNinjaArgs) => {
  return db.ninja.update({
    data: input,
    where: { id },
  })
}

export const deleteNinja = ({ id }: Prisma.NinjaWhereUniqueInput) => {
  return db.ninja.delete({
    where: { id },
  })
}
