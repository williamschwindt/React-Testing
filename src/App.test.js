import React from 'react';
import {
  render,
  wait
} from '@testing-library/react';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';

jest.mock('./api/fetchShow');

const show = {
    data: {
        id: 2993,
        url: "http://www.tvmaze.com/shows/2993/stranger-things",
        name: "Stranger Things",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Fantasy", "Science-Fiction"],
        status: "Running",
        runtime: 60,
        premiered: "2016-07-15",
        officialSite: "https://www.netflix.com/title/80057281",
        schedule: {time: "", days: Array(1)},
        rating: {average: 8.7},
        weight: 98,
        network: null,
        webChannel: {id: 1, name: "Netflix", country: null},
        externals: {tvrage: 48493, thetvdb: 305288, imdb: "tt4574334"},
        image: {medium: "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"},
        summary: "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
        updated: 1582785474,
        _links: {self: {href: "http://api.tvmaze.com/shows/2993"},
            previousepisode: {href: "http://api.tvmaze.com/episodes/1576476"},
            __proto__: Object},
        _embedded: {episodes: Array(26)},
        __proto__: Object
    }
}

test("app fetches show data and renders it", async() => {
    mockFetchShow.mockResolvedValueOnce(show);

    const { getByText } = render(<App />);

    getByText(/fetching data.../i);

    await wait();

    getByText(/select a season/i);
})


