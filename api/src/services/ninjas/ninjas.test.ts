import { ninjas, ninja, createNinja, updateNinja, deleteNinja } from './ninjas'
import type { StandardScenario } from './ninjas.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('ninjas', () => {
  scenario('returns all ninjas', async (scenario: StandardScenario) => {
    const result = await ninjas()

    expect(result.length).toEqual(Object.keys(scenario.ninja).length)
  })

  scenario('returns a single ninja', async (scenario: StandardScenario) => {
    const result = await ninja({ id: scenario.ninja.one.id })

    expect(result).toEqual(scenario.ninja.one)
  })

  scenario('creates a ninja', async () => {
    const result = await createNinja({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a ninja', async (scenario: StandardScenario) => {
    const original = await ninja({ id: scenario.ninja.one.id })
    const result = await updateNinja({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a ninja', async (scenario: StandardScenario) => {
    const original = await deleteNinja({ id: scenario.ninja.one.id })
    const result = await ninja({ id: original.id })

    expect(result).toEqual(null)
  })
})
