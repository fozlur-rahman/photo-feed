import PhotosList from "../components/PhotosList";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
    const dict = await getDictionary(lang);
    const response = await fetch(`${process.env.BASE_URL}/photos`);
    const photos = await response.json();
    console.log(photos);
    return (
        <div>
            <PhotosList photos={photos} />
        </div>
    );
}
