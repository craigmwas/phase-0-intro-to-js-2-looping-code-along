 require( '../index.js' );
function writeCards( names, event ) {
  names.forEach( name => console.log( `Thank you, ${name}, for the wonderful ${event} gift!` ) );
  return names.map( name => `Thank you, ${name}, for the wonderful ${event} gift!` );
}
function countDown( number ) {
  for ( let i = number; i >= 0; i-- ) {
    console.log( i );
  }
}
const sinon = require( 'sinon' );
function calledThrice(spy) {
  return spy.callCount === 3
}
 

describe( 'index.js', () => {
  let spy; 
  beforeEach( () => {
    spy = sinon.spy(console, 'log');
  } );

  afterEach( () => {
    spy.restore();
  } );

  describe( 'writeCards()', () => {

    it( 'returns an array of thank you messages for each name provided to the function', () => {
      expect(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")).to.deep.eq([
        "Thank you, Guadalupe, for the wonderful surprise gift!",
        "Thank you, Ollie, for the wonderful surprise gift!",
        "Thank you, Aki, for the wonderful surprise gift!",
      ]);
    } );
  } );
it ("logs the expected messages to the console", () => {
  writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
  expect(spy.callCount).to.equal(3); 
});


  describe( 'countDown()', () => {
    afterEach( () => {
      spy.restore();
    } );

    it( 'invokes console.log once for each number, counting down from the number provided to zero', () => {
      countDown( 10 );
      expect( spy.callCount, "Expected countDown(10) to invoke 11 console.logs" )
        .to.eq( 11 );
    } );

    it( 'logs each number when counting down, starting from the number provided', () => {
      countDown( 4 );
      expect( spy.calledWithExactly( 4 )).to.be.true;
      expect( spy.calledWithExactly( 3 )).to.be.true;
      expect( spy.calledWithExactly( 2 )).to.be.true;
      expect( spy.calledWithExactly( 1 )).to.be.true;
      expect( spy.calledWithExactly( 0 )).to.be.true;
    } );
  } );
} );
