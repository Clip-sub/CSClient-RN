/**
 * @flow
 */

'use strict';

import Types from './types-anilist';

export function fetchAnimeInfo(link: string) {
  return {
    type: Types.FETCH_ANIME_INFO,
    link,
  };
}
