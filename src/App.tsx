import React, { useState } from 'react';
import TagsInput from './TagsInput';

const App: React.FC = () => {
  function handleSelecetedTags(items) {
    console.log("itens selected", items);
  }

  const [tags, setTags] = useState([
    "contato@rarolabs.com.br",
    "nao-responda@rarolabs.com.br"
  ]);

  return (
    <div className="App">
      <TagsInput
        onSelectTags={handleSelecetedTags}
        fullWidth
        variant="outlined"
        id="tags"
        name="tags"
        placeholder="add Tags"
        label="tags"
        tags={tags}
      />
    </div>
  );
}

export default App;