// pages/api/status.ts
import type { NextApiRequest, NextApiResponse } from "next";
import {
  StatusResponse,
  Application,
} from "@component/types/application-tracker";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StatusResponse | { error: string }>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Extract query parameters
    const {
      referenceNo,
      customerType,
      customer,
      travelerName,
      travelerPassportNo,
      visaBranch,
      entryGenerationBranch,
      fromDate,
      toDate,
      queue,
      status,
      country,
      billingToCompany,
      page = "1",
    } = req.query;

    // Parse page number
    const currentPage = parseInt(page as string, 10) || 1;

    // Build query for your external API
    const queryParams: Record<string, string> = {};

    // Add all available parameters
    if (referenceNo) queryParams.referenceNo = referenceNo as string;
    if (customerType) queryParams.customerType = customerType as string;
    if (customer) queryParams.customer = customer as string;
    if (travelerName) queryParams.travelerName = travelerName as string;
    if (travelerPassportNo)
      queryParams.travelerPassportNo = travelerPassportNo as string;
    if (visaBranch) queryParams.visaBranch = visaBranch as string;
    if (entryGenerationBranch)
      queryParams.entryGenerationBranch = entryGenerationBranch as string;
    if (fromDate) queryParams.fromDate = fromDate as string;
    if (toDate) queryParams.toDate = toDate as string;
    if (queue) queryParams.queue = queue as string;
    if (status) queryParams.status = status as string;
    if (country) queryParams.country = country as string;
    if (billingToCompany)
      queryParams.billingToCompany = billingToCompany as string;

    // Add pagination parameters
    queryParams.page = currentPage.toString();
    queryParams.limit = "10"; // You can adjust this or make it configurable

    // Convert queryParams to URL search parameters
    const searchParams = new URLSearchParams();
    Object.entries(queryParams).forEach(([key, value]) => {
      searchParams.append(key, value);
    });

    // Your external API endpoint - replace with your actual API URL
    const apiUrl = `${
      process.env.NEXT_PUBLIC_API_BASE_URL
    }/applications/status?${searchParams.toString()}`;

    // Fetch data from the external API
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "Failed to fetch application status"
      );
    }

    // Parse the response
    const data = await response.json();

    // Return the structured response according to your actual API structure
    const statusResponse: StatusResponse = {
      applications: data.applications || [],
      totalPages: data.totalPages || 1,
      currentPage: data.currentPage || currentPage,
      totalCount: data.totalCount || 0,
    };

    return res.status(200).json(statusResponse);
  } catch (error) {
    console.error("Error fetching application status:", error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : "Internal server error",
    });
  }
}
