"use client";
import React, { useState, useEffect } from "react";

interface Item {
  id: number;
  body: string;
  name: string;
  title: string;
  userId: number;
}

const Useeffect = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState<Item[]>([]);

  console.log("items", items);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]); // any parameter passed here once they change your hook is going to run

  return (
    <div className="flex flex-col justify-center items-center mt-20 gap-4">
      <div className="flex gap-2 text-2xl font-bold">
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>

      <h1 className="text-2xl font-bold">Table</h1>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.body.slice(0, 10)}</td>
              <td>{item?.title.slice(0, 10)}</td>
              <td>{item?.userId}</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={3}>Total items: {items.length}</td>
          </tr>
        </tfoot>
      </table>

      {/* <h1 className="text-2xl font-bold">{resourceType}</h1>
      {resourceType === "posts" || resourceType === "comments"
        ? items.map((item, index) => <div>{item.body}</div>)
        : items.map((item, index) => <div>{item.name}</div>)} */}
    </div>
  );
};

export default Useeffect;
