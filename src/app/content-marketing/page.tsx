import type { Metadata } from "next";
import { getCluster } from "@/lib/clusters";
import { ClusterHub, clusterMetadata } from "@/components/ClusterHub";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ key: "content-marketing" }];
}

export async function generateMetadata(): Promise<Metadata> {
  const cluster = getCluster("content-marketing");
  return cluster ? clusterMetadata(cluster) : {};
}

export default function HubPage() {
  const cluster = getCluster("content-marketing");
  if (!cluster) notFound();
  return <ClusterHub cluster={cluster} />;
}
