import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getMovieById } from "../service/api";
import { useParams } from "react-router-dom";

export const Watch = () => {
  const { id } = useParams<{ id: string }>();
  const { i18n } = useTranslation();

  const [trailer, setTrailer] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!id) return;
      try {
        const data = await getMovieById(id, i18n.language);
        if (data) setTrailer(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetails();
  }, [i18n.language, id]);
  console.log(trailer);
  
  return (
    <>
      <div className="h-screen w-full" >
     {trailer  ? ( <iframe
            className="w-full h-full"
          src={`${trailer}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>) : (<h1>loading</h1>)}
      </div>
    </>
  );
};
