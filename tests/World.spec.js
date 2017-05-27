'use strict';
import 'should';
import { World, Vec2, BodyDef, Body } from '../';

describe('World', () => {
  let gravity = new Vec2(0, 0);
  it('should be created without an error', function () { new World(gravity).should.be.ok; });

  let world;
  beforeEach(function () { world = new World(gravity) });

  describe('#Step()', function () {
    it('should step without an error', function () { world.Step(0, 0, 0); });
  });
  describe('#CreateBody()', function () {
    it('should create body without an error', function () { world.CreateBody(new BodyDef()).should.be.ok; });
  });
});
