import React from 'react';
import {NoBookmarkIcon} from './NoBookmarkIcon';
import {BookmarkIcon} from './BookmarkIcon';

export default function Bookmark({onBookmark, bookmarked, id}) {
  return (
    <StyledBookmark onClick={() => onBookmark(id)}>{bookmarked ? <BookmarkIcon /> : <NoBookmarkIcon />}</StyledBookmark>
  );
}
const StyledBookmark = styled.button`
  width: 50px;
  fill: 1;
  background-color: transparent;
`;
