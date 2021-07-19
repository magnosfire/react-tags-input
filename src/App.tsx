import React, { useState } from 'react';
import TagsInput from './TagsInput';

const App: React.FC = () => {
  function handleSelecetedTags(items: string[]) {
    console.log(items)
    return items;
  }

  const [tags, setTags] = useState<string[]>([
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
        placeholder="Adicionar Tag"
        label="tags"
        tags={tags}
        data-testid={'tagInput'}
      />
    </div>
  );
}

export default App;