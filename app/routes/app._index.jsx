import {
  Page,
  Layout,
  Text,
  VerticalStack,
  Card,
  List,
  Link,
} from "@shopify/polaris";

import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};

export default function Index() {
  return (
    <Page>
      <ui-title-bar title="Statement Agency" />
      <VerticalStack gap="5">
        <Layout>
          <Layout.Section>
            <Card>
              <VerticalStack gap="5">
                <VerticalStack gap="2">
                  <Text as="h2" variant="headingMd">
                    Welcome to Statement's Custom App
                  </Text>

                  <Text variant="bodyMd" as="p">
                    Use this app to implement checkout functions which allow
                    checkout extensions to run on this store. This app allows a
                    front-end to be added to functions so that the user can
                    customise settings, rather than only having extension-only
                    capabilities.
                  </Text>
                  <Text variant="bodyMd" as="p">
                    Find out how to add extensions to this app by visiting the{" "}
                    <Link
                      url="https://statementagency.slite.com/app/docs/75tfts5DSAp-WN"
                      target="_blank"
                    >
                      Statment docs
                    </Link>
                  </Text>
                </VerticalStack>
                <VerticalStack gap="2">
                  <Text variant="headingMd" as="h2">
                    Statement Extensions library
                  </Text>
                  <Text variant="bodyMd" as="p">
                    Listed here are all the Checkout functions that are
                    available in Statement's library
                  </Text>
                  <List spacing="loose">
                    <List.Item>Gift with purchase</List.Item>
                    <List.Item>Hide shipping rates</List.Item>
                    <List.Item>Hide payment methods</List.Item>
                    <List.Item>Add PO number field</List.Item>
                    <List.Item>Quantity limit</List.Item>
                  </List>
                </VerticalStack>
              </VerticalStack>
            </Card>
          </Layout.Section>
          <Layout.Section secondary>
            <VerticalStack gap="5">
              <Card>
                <VerticalStack gap="2">
                  <Text as="h2" variant="headingMd">
                    Other links
                  </Text>
                  <List spacing="loose">
                    <List.Item>
                      Visit the
                      <Link
                        url="https://statementagency.slite.com/app/docs/75tfts5DSAp-WN"
                        target="_blank"
                      >
                        {" "}
                        Statements docs
                      </Link>{" "}
                      to find out more about Shopify functions & custom apps.
                    </List.Item>
                    <List.Item>
                      Follow Shopify's{" "}
                      <Link
                        url="https://shopify.dev/docs/apps/getting-started/build-app-example"
                        target="_blank"
                      >
                        {" "}
                        QR code example app.
                      </Link>{" "}
                    </List.Item>
                    <List.Item>
                      Explore Shopify’s API with this{" "}
                      <Link
                        url="https://shopify.dev/docs/apps/tools/graphiql-admin-api"
                        target="_blank"
                      >
                        GraphQL examiner tool
                      </Link>
                    </List.Item>
                  </List>
                </VerticalStack>
              </Card>
            </VerticalStack>
          </Layout.Section>
        </Layout>
      </VerticalStack>
    </Page>
  );
}
