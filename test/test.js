var assert = require('assert');

var vkontakte = require('..');

describe('vkontakte', function () {

  describe('vkontakte(accessToken)', function () {

    it('returns function', function () {
      var vk = vkontakte('access-token');
      assert.equal(typeof vk, 'function');
    });

    describe('when token is invalid', function () {

      var vk = vkontakte('no such token');

      it('returns error', function (done) {

        vk('users.get', function (err) {
          assert.throws(function () {
            assert.ifError(err);
          }, function (err) {
            return err.error_code === 5;
          });

          done();
        });

      });
    });

  });

});
