'use strict';
import assert from 'assert';
import should from 'should';
import { Vec2, World, BodyDef, EdgeShape, CircleShape, _dynamicBody } from '../';

// Need to override should.deepEqual here because the default should.deepEqual actually just uses assert.equal
// instead of asset.deepEqual which causes these tests to fail because of slightly different prototypes
should.Assertion.add('deepEqual', function (obj2) {
  this.params = {
    operator: 'expected ' + this.obj + ' to deepEqual ' + obj2,
    expected: obj2,
    showDiff: true
  };
  assert.deepEqual(this.obj, obj2, 'expected ' + this.obj + ' ' + JSON.stringify(this.obj) + ' to deepEqual ' + obj2 + ' ' + JSON.stringify(obj2));
}, false);

let world = new World(new Vec2(0, 0));

describe('Box2D.i', function () {
  var shapes = [CircleShape, EdgeShape];
  shapes.forEach(function (Shape) {
    describe(`for ${Shape.name}`, function () {
      let shape = new Shape();

      let bodyDef = new BodyDef();
      bodyDef.position = new Vec2(0, 0);
      bodyDef.type = _dynamicBody;

      let body = world.CreateBody(bodyDef);

      let fixture = body.CreateFixture(shape, 0);

      it(`should return ${Shape.name}`, function () {
        fixture.GetShape().should.deepEqual(shape);
      });
    });
  });
});
