var loop = true;
var easing = 'linear';
var direction = 'alternate';

anime({
  targets: '.ball',
  translateX: 0,
  translateY: 0,
  easing,
  loop,
  direction,
  background: [{ value: '#66fcf0' }]
})
var ballTimeline = anime.timeline({
  loop,
  duration: 2000,
  direction
})
var bar2Timeline = anime.timeline({
  loop,
  duration: 2000,
  direction
})
var bar1Timeline = anime.timeline({
  loop,
  duration: 2000,
  direction
})
ballTimeline
.add({
  targets: '.ball',
  translateY: 250,
  translateX: 500,
  easing
}).add({
  targets: '.ball',
  translateY: 0,
  translateX: '-500',
  easing
}).add({
  targets: '.ball',
  translateY: '-300',
  translateX: 500,
  easing
})
bar2Timeline
.add({
  targets: '.bar2',
  translateY: 250,
  easing,
  background: '#66fcf0'
}).add({
  targets: '.bar2',
  translateY: 0,
  easing,
  background: '#66fcf0'
}).add({
  targets: '.bar2',
  translateY: '-300',
  easing,
  background: '#66fcf0'
})
bar1Timeline
.add({
  targets: '.bar1',
  translateY: '-300',
  easing,
  background: '#66fcf0'
}).add({
  targets: '.bar1',
  translateY: 0,
  easing,
  background: '#66fcf0'
}).add({
  targets: '.bar1',
  translateY: 250,
  easing,
  background: '#66fcf0'
})