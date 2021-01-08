import dragula from 'dragula/dist/dragula.min';

export class Drag {
  static setContainers(args) {
    dragula(args);

    // TODO: Open issue: https://github.com/bevacqua/dragula/issues/487
    for (let i = 0; i < args.length; i++) {
      args[i].addEventListener('touchmove', e => e.preventDefault());
    }
  }
}

