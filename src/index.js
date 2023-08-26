import Daemon from './js/Daemon';

const daemon = new Daemon('Олег');

daemon.hit(4);
daemon.stoned = 3;
console.log(daemon);
