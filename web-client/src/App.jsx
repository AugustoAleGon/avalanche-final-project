import {Suspense} from 'react';
import { Toaster } from 'react-hot-toast';
import {BrowserRouter} from 'react-router-dom';
import {Router} from './general/Router.jsx';
import {Loading} from './components/Loading.jsx';
import { NavTabs } from './general/NavTabs.jsx';

export const PageWithHeader = ({children}) => (
  <div className="flex h-full flex-col">{children}</div>
);

export const App = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <PageWithHeader>
          <Loading name="suspense"/>
        </PageWithHeader>
      }
    >
      <div className="flex w-full flex-col items-center justify-between p-6 gap-6 text-center lg:flex-row lg:text-left">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">NFT Builder</span>
        </h2>
        <w3m-button />
      </div>
      <div className="h-full bg-white-50 p-4 lg:p-6">
        <NavTabs />
        <Router/>
      </div>
      <Toaster />
    </Suspense>
  </BrowserRouter>
);
