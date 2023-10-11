import {createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "lnru3yc2",
  dataset: "production",
  apiVersion: "2023-10-09",
  useCdn: true,
  token:
    "skZFoztpIPO2YguHgNs1HPAB0ucpWkNiq1EIYL2RFwzZwWe54UvciMuD5EcSso8VLsViDQpdqO0NlPBVPA7o87rwaUo33fQITRlS9vyECYktSuT2DSGiXC4sOu66qraV1mj2BP9NlBw2etj4Yocrj7lMUOueoCB4h698SGL3Kf54ABDe0rfD"
});

const builder = imageUrlBuilder(client);

export const urlFor = source => {
  builder.image(source);
};
