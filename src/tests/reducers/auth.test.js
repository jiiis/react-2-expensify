import authReducer from '../../reducers/auth'

test('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' })

  expect(state).toEqual({})
})

test('should login', () => {
  const uid = 'test-uid'
  const action = {
    type: 'LOGIN',
    uid
  }
  const state = authReducer({}, action)

  expect(state).toEqual({ uid })
})

test('should logout', () => {
  const uid = 'test-uid'
  const action = {
    type: 'LOGOUT'
  }
  const state = authReducer({ uid }, action)

  expect(state).toEqual({})
})
