'use strict'

describe('/profile', function(){
  it('should render the current users profile', function(done){
    webServer()
      .get('/profile')
      .end(function(error, response){
        if (error) { return done(error) }
        expect(response.text).to.contain('Fake News')
        expect(response.text).to.contain('Learning Facilitator:')
        expect(response.text).to.contain('Personal Days Remaining:')
        done()
      })
  })
})
