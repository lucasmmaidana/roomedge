import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "", // ID of a Compose-compatible space to be used \
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "", // delivery API key for the space \
});

export async function getRooms() {
  const query = {
    content_type: "room",
  };
  const { items: fields } = await client.getEntries(query);
  return (
    fields.map(({ fields, sys }) => ({
      ...fields,
      id: sys.id,
      image: fields.image.fields.file.url || "",
    })) || null
  );
}
