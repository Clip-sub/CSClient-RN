/**
 * @flow
 */

'use strict';

import Types from './types-categories';

export function getCategories(page: number) {
  return {
    type: Types.GET_CATEGORIES,
    page,
  };
}

export function receiveCategories(categories: Array<Object>, page: number) {
  return {
    type: Types.RECEIVE_CATEGORIES,
    categories,
    page,
  };
}

export function filterCategories(keyword: string) {
  return {
    type: Types.FILTER_CATEGORIES,
    keyword,
  };
}
