import { db } from 'src/lib/db'

export function samurais() {
  return db.samurai.findMany()
}

export function samurais32() {
  return db.samurai.findMany()
}
