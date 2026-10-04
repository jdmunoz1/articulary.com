import type { Metadata } from "next";
import { getCluster } from "@/lib/clusters";
import { ClusterHub, clusterMetadata } from "@/components/ClusterHub";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ key: "ai-content" }];
}

export async function generateMetadata(): Promise<Metadata> {
  const cluster = getCluster("ai-content");
  return cluster ? clusterMetadata(cluster) : {};
}

export default function HubPage() {
  const cluster = getCluster("ai-content");
  if (!cluster) notFound();
  return <ClusterHub cluster={cluster} />;
}
