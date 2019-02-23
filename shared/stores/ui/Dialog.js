import { observable, action } from 'mobx';
import { dispatch } from 'rfx-core';

const defaultLabels = { cancel: 'Cancel' };

const defaultHandlers = {
  onCancel: e => ([
    e.preventDefault(),
    dispatch('ui.dialog.close'),
  ]),
};

export default class Dialog {

  @observable title = '';
  @observable message = '';
  @observable children = null;
  @observable isOpen = false;
  @observable labels = {};
  @observable handlers = {};

  @action
  open({
    title = '',
    message = '',
    labels = null,
    handlers = null,
    children = null,
  }) {
    this.title = title;
    this.message = message;
    this.children = children;
    this.isOpen = true;

    this.handlers = handlers
      ? Object.assign(handlers, defaultHandlers)
      : defaultHandlers;

    this.labels = labels
      ? Object.assign(labels, defaultLabels)
      : defaultLabels;
  }

  @action
  close() {
    this.title = '';
    this.message = '';
    this.children = null;
    this.isOpen = false;
    this.labels = defaultLabels;
    this.handlers = defaultHandlers;
  }
}
