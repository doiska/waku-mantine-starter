import {
  Anchor,
  Text,
  Title
} from "@mantine/core";

export default async function HomePage() {
  const data = await getData();

  return (
      <div>
        <Title ta="center" mt={100}>
          {data.title} {" "}
          <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
            {data.headline}
          </Text>
        </Title>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
          {data.body}
        </Text>
      </div>
  );
}

const getData = async () => {
  return {
    title: 'Welcome to',
    headline: 'Waku + Mantine',
    body: 'This starter Waku project includes a minimal setup for server side rendering!',
  };
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
