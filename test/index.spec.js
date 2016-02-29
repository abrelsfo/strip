var should = require('chai').should(),
    extendString = require('../index');
extendString();

describe('#strip', function () {
    it('Removes " " from String: Hello World', function (){
        var s = 'Hello World'.strip(' ');
        s.should.equal('HelloWorld');
    });

    it('Removes "W" from String: Hello World', function (){
        var s = 'Hello World'.strip('W');
        s.should.equal('Hello orld');
    });

    it('Removes "T","T", and " " from String: This is the end of the world as we know it', function (){
        var s = 'This is the end of the world as we know it'.strip('t').strip(' ');
        s.should.equal('hisisheendofheworldasweknowi');
    });

    it('Removes "t" and " " from String: This is the end of the world as we know it', function (){
        var s = 'This is the end of the world as we know it'.strip('t',false).strip(' ');
        s.should.equal('Thisisheendofheworldasweknowi');
    });
});
