import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Movie from './Movie';

afterEach(() => {
    cleanup();
    console.error.mockClear();
});

console.error = jest.fn();

test('<Movie />', () => {
    render(<Movie />);
    expect(console.error).toBeCalled();
})

const movie ={
    id: 'hi',
    title: 'lololol',
    poster_path: 'sckedhck.jpg'
}

test('<Movie />', () => {
    render(
    <MemoryRouter>
        <Movie movie={movie}/>
    </MemoryRouter>
    );
    expect(console.error).toBeCalled();
})