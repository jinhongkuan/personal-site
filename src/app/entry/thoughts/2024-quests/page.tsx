import { Box } from '@chakra-ui/react';
import fs from 'fs';
import { marked } from 'marked';

import EntryComponent from '~/lib/components/entry';

export default function Entry() {
  marked.setOptions({
    breaks: true, // Convert '\n' in paragraphs into <br>
    gfm: true, // Enable GitHub flavored markdown
  });
  return (
    <EntryComponent title="2024, a year of quests">
      <Box
        dangerouslySetInnerHTML={{
          __html: (
            marked(
              fs.readFileSync('src/lib/entry/2024-quests.md', 'utf-8')
            ) as string
          ).replaceAll('\n', '<br />'),
        }}
      />
    </EntryComponent>
  );
}
