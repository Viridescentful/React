const MediaRow = (props) => {
  const {item} = props;
  return (
    <tr>
      <th>Thumbnail</th>
      <th>Title</th>
      <th>Description</th>
      <th>Created</th>
      <th>Size</th>
      <th>Type</th>
    </tr>
  );
};
