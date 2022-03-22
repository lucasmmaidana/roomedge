import { render, screen } from "@testing-library/react";
import RoomCard from "../components/RoomCard";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", async () => {
    const room = {
      title: "Downtown Oporto Inn",
      price: 90,
      location: "Porto, Portugal",
      description:
        "Tradicional building, with high ceilings next to City Hall or Trindade Subway station, at a short walking distance from the historic center of this beautiful city. ",
      guests: 4,
      image:
        "https://images.ctfassets.net/7cki5kl25948/1ViqrTvpZSui4wOXYrPO2P/18abc8a4b3450cb1a2678f44e6fabd78/8ee32fb6-2094-42ee-ae6c-ff40b479f9a7.jpg",
      id: "e7ey8bJoBlH51zGqPFjIj",
    };
    render(<RoomCard room={room} />);

    const heading = await screen.findByText("Downtown Oporto Inn");
    expect(heading).toBeInTheDocument();
  });
});
