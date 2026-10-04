import type { Metadata } from "next";
import { getCluster } from "@/lib/clusters";
import { ClusterHub, clusterMetadata } from "@/components/ClusterHub";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ key: "blogging" }];
}

export async function generateMetadata(): Promise<Metadata> {
  const cluster = getCluster("blogging");
  return cluster ? clusterMetadata(cluster) : {};
}

export default function HubPage() {
  const cluster = getCluster("blogging");
  if (!cluster) notFound();
  return <ClusterHub cluster={cluster} />;
}
