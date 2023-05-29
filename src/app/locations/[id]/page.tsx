import React from "react";
import { prisma } from "@/app/api/client";
import { Location as LocationType } from "@prisma/client";
import Content from "./content";
import { PostDetails } from "type";

type Props = {
  params: { id: string };
};

async function getLocation(id: string) {
  const locationDetails: LocationType | null = await prisma.location.findUnique(
    {
      where: { id },
    }
  );

  if (!locationDetails) {
    console.log(`Post with id ${id} not found`);
    return null;
  }
  return locationDetails;
}

export default async function Post({ params }: Props) {
  const { id } = params;
  const post: PostDetails | null = await getLocation(id);

  if (!post) {
    return <div>Post Not Found</div>;
  }

  return (
    <main className="px-10 leading-7 bg-[#FFFFFF] text-wh-900">
      <Content post={post} />
    </main>
  );
}
