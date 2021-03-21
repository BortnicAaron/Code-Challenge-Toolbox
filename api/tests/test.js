const request = require('supertest')
const { expect } = require('chai')
const app = require('../app')

/**
 * Testing: get texto invertido
 */
describe('GET /iecho?text=test', () => {
  it('devolver un json con el texto invertido', (done) => {
    request(app)
      .get('/iecho?text=test')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.have.property('text')
        expect(res.body.text).to.equal('tset')
        done(err)
      })
  })
})
describe('GET /iecho?text=OSo', () => {
  it('devolver un json con el texto invertido y con la propiedad palindrome en true', (done) => {
    request(app)
      .get('/iecho?text=OSo')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.have.property('text')
        expect(res.body).to.have.property('palindrome')
        expect(res.body.text).to.equal('oSO')
        expect(res.body.palindrome).to.equal(true)
        done(err)
      })
  })
})

describe('GET /iecho?text=', () => {
  it('devolver un json con el error', (done) => {
    request(app)
      .get('/iecho?text=')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.error).to.equal('no text')
        done(err)
      })
  })
})
