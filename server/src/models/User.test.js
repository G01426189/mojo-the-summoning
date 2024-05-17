const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')

const db = require('../db/config')
const User = require('../models/User')


// defined in global scope
let user

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await User.create({ username: 'gandalf' })
  console.log('User created:', user.toJSON());
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('User', () => {
  it('has an id', async () => {
    expect(user).toHaveProperty('id')
  })

  it('has the correct username', async () => {
    expect(user.username).toBe('gandalf')
  })

  it('is created with a non-null username', async () => {
    const newUser = await User.create({ username: null }) // Attempt to create a user with a null username
    expect(newUser).toBeNull() 
  })  
  
  
})
