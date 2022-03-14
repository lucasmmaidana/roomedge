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
      image: "https:" + fields.image.fields.file.url || "",
    })) || null
  );
}

export async function getRoomsID() {
  const query = {
    content_type: "room",
    select: "sys.id",
  };
  const { items: fields } = await client.getEntries(query);
  return (
    fields.map(({ sys }) => ({
      id: sys.id,
    })) || null
  );
}

export async function getRoomData(id) {
  const query = {
    content_type: "room",
    "sys.id": id,
  };
  const { items: fields } = await client.getEntries(query);
  const room = fields[0];
  return {
    ...room.fields,
    id: room.sys.id,
    image: "https:" + room.fields.image.fields.file.url || "",
  };
}
