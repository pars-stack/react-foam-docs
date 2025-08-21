"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronRight,
  Github,
  Menu,
  X,
  BookOpen,
  Copy,
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { CodeBlock } from "@/components/common/code-block";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "installation", label: "Installation" },
  { id: "quick-start", label: "Quick Start" },
  { id: "api-reference", label: "API Reference" },
  { id: "examples", label: "Examples" },
  { id: "best-practices", label: "Best Practices" },
];

export default function DocsPage() {
  const [activeId, setActiveId] = useState<string>("introduction");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile Header */}
        <div className="flex lg:hidden justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Docs</h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setMobileOpen(true)}
            className="border-border"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 relative lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div
            className={clsx(
              "inset-y-0 left-0 z-40 w-64 p-4 shadow-lg sticky top-0 transform transition-transform lg:relative lg:translate-x-0 lg:shadow-none bg-sidebar text-sidebar-foreground border-r border-sidebar-border",
              mobileOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="flex justify-between items-center mb-4 lg:hidden">
              <h2 className="text-lg font-semibold">Table of Contents</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <Card className="bg-sidebar text-sidebar-foreground border border-sidebar-border">
              <CardHeader>
                <CardTitle className="text-lg">Table of Contents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setMobileOpen(false)}
                    className={clsx(
                      "flex items-center text-sm transition-colors",
                      activeId === section.id
                        ? "text-sidebar-primary font-medium"
                        : "text-sidebar-foreground hover:text-sidebar-accent"
                    )}
                  >
                    <ChevronRight
                      className={clsx(
                        "w-4 h-4 mr-1",
                        activeId === section.id ? "text-sidebar-primary" : ""
                      )}
                    />
                    {section.label}
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none text-foreground">
              <section id="introduction" className="mb-12">
                <h1 className="text-4xl font-bold">Introduction</h1>
                <p className="text-muted-foreground">
                  React Foam is a lightweight, TypeScript-first state management library that eliminates boilerplate
                  while providing exceptional performance and developer experience.
                </p>
              </section>

              <section id="installation" className="mb-12">
                <h2 className="text-3xl font-bold">Installation</h2>
                <p className="text-muted-foreground">
                  Install React Foam using your preferred package manager:
                </p>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">npm</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-900 rounded-lg p-4 relative group">
                        <code className="text-green-400 text-sm">npm install react-foam</code>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">yarn</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-900 rounded-lg p-4 relative group">
                        <code className="text-green-400 text-sm">yarn add react-foam</code>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">pnpm</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-900 rounded-lg p-4 relative group">
                        <code className="text-green-400 text-sm">pnpm add react-foam</code>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section id="quick-start" className="mb-12">
                <h2 className="text-3xl font-bold">Quick Start</h2>
                <p className="text-muted-foreground">Get started with React Foam in just a few simple steps:</p>
                <CodeBlock language="tsx" code={`import { createStore } from 'react-foam';

interface CounterState {
  count: number;
  step: number;
}

const useCounterStore = createStore<CounterState>({
  count: 0,
  step: 1
});`} />
              </section>

              {/* API Reference */}
              <section id="api-reference" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">API Reference</h2>

                <div className="space-y-8">
                  {/* createStore */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl font-mono">createStore</CardTitle>
                      <CardDescription>
                        Creates a new React Foam store with the given initial state.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Signature</h4>
                        <div className="bg-gray-900 rounded-lg p-4">
                          <code className="text-gray-100 text-sm">
                            function createStore&lt;T extends object&gt;(initialState: T): StoreHook&lt;T&gt;
                          </code>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Parameters</h4>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <ul className="space-y-2">
                            <li>
                              <code className="bg-gray-200 px-2 py-1 rounded text-sm">initialState: T</code>
                              <span className="ml-2 text-gray-600">- The initial state object for the store</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Returns</h4>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-gray-600">
                            A <code className="bg-gray-200 px-2 py-1 rounded text-sm">StoreHook&lt;T&gt;</code> that can be used as both a React hook and a store object.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Example</h4>
                        <div className="bg-gray-900 rounded-lg p-4">
                          <pre className="text-gray-100 text-sm overflow-x-auto">
                            {`const useUserStore = createStore({
  user: null,
  isLoading: false,
  preferences: {
    theme: 'light',
    language: 'en'
  }
});`}
                          </pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* memo */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl font-mono">memo</CardTitle>
                      <CardDescription>
                        Creates a memoized selector that automatically tracks property access.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Signature</h4>
                        <div className="bg-gray-900 rounded-lg p-4">
                          <code className="text-gray-100 text-sm">
                            function memo&lt;T extends object, R&gt;(selector: (state: T) =&gt; R): (state: T) =&gt; R
                          </code>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Example</h4>
                        <div className="bg-gray-900 rounded-lg p-4">
                          <pre className="text-gray-100 text-sm overflow-x-auto">
                            {`import { memo } from 'react-foam';

const getActiveUsers = memo(state => 
  state.users.filter(user => user.active)
);

function UserList() {
  const activeUsers = useUserStore(getActiveUsers);
  return (
    <div>
      {activeUsers.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}`}
                          </pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* computed */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl font-mono">computed</CardTitle>
                      <CardDescription>
                        Creates a non-reactive function that computes a value from a store&apos;s state.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Signature</h4>
                        <div className="bg-gray-900 rounded-lg p-4">
                          <code className="text-gray-100 text-sm">
                            function computed&lt;T extends object, R&gt;(store: StoreHook&lt;T&gt;, selector: Selector&lt;T, R&gt;): () =&gt; R
                          </code>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Example</h4>
                        <div className="bg-gray-900 rounded-lg p-4">
                          <pre className="text-gray-100 text-sm overflow-x-auto">
                            {`import { computed } from 'react-foam';

const getTotalPrice = computed(useCartStore, state =>
  state.items.reduce((total, item) => total + item.price, 0)
);

function handleCheckout() {
  const total = getTotalPrice();
  if (total > 0) {
    processPayment(total);
  }
}`}
                          </pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Examples */}
              <section id="examples" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Examples</h2>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Todo List</CardTitle>
                      <CardDescription>
                        A complete todo list implementation with filtering and persistence.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <pre className="text-gray-100 text-sm overflow-x-auto">
                          {`interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
}

const useTodoStore = createStore<TodoState>({
  todos: [],
  filter: 'all'
});

function TodoApp() {
  const { todos, filter } = useTodoStore();
  
  const filteredTodos = useTodoStore(memo(state => {
    switch (state.filter) {
      case 'active':
        return state.todos.filter(todo => !todo.completed);
      case 'completed':
        return state.todos.filter(todo => todo.completed);
      default:
        return state.todos;
    }
  }));
  
  const addTodo = (text: string) => {
    useTodoStore.setState(state => ({
      ...state,
      todos: [...state.todos, {
        id: crypto.randomUUID(),
        text,
        completed: false,
        createdAt: new Date()
      }]
    }));
  };
  
  return (
    <div>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={filteredTodos} />
      <TodoFilters />
    </div>
  );
}`}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Async Data Fetching</CardTitle>
                      <CardDescription>
                        Handle loading states and errors with async operations.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <pre className="text-gray-100 text-sm overflow-x-auto">
                          {`interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useUserStore = createStore<ApiState<User>>({
  data: null,
  loading: false,
  error: null
});

async function fetchUser(id: string) {
  useUserStore.setState(state => ({
    ...state,
    loading: true,
    error: null
  }));
  
  try {
    const user = await api.getUser(id);
    useUserStore.setState(state => ({
      ...state,
      data: user,
      loading: false
    }));
  } catch (error) {
    useUserStore.setState(state => ({
      ...state,
      error: error.message,
      loading: false
    }));
  }
}

function UserProfile({ userId }: { userId: string }) {
  const { data: user, loading, error } = useUserStore();
  
  useEffect(() => {
    fetchUser(userId);
  }, [userId]);
  
  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;
  if (!user) return <NotFound />;
  
  return <UserCard user={user} />;
}`}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Best Practices */}
              <section id="best-practices" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices</h2>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Keep Stores Focused</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Each store should have a single responsibility and manage a cohesive piece of application state.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2">✅ Good</h4>
                          <div className="bg-gray-900 rounded-lg p-3">
                            <pre className="text-gray-100 text-xs">
                              {`const useAuthStore = createStore({
  user: null,
  token: null,
  isAuthenticated: false
});

const useCartStore = createStore({
  items: [],
  total: 0
});`}
                            </pre>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">❌ Avoid</h4>
                          <div className="bg-gray-900 rounded-lg p-3">
                            <pre className="text-gray-100 text-xs">
                              {`const useAppStore = createStore({
  auth: { user: null, token: null },
  cart: { items: [], total: 0 },
  ui: { theme: 'light' },
  data: { users: [], posts: [] }
});`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Use Memoized Selectors</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Always use the <code className="bg-gray-200 px-2 py-1 rounded text-sm">memo</code> function when creating derived state to prevent unnecessary recalculations.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2">✅ Good</h4>
                          <div className="bg-gray-900 rounded-lg p-3">
                            <pre className="text-gray-100 text-xs">
                              {`const getActiveUsers = memo(state => 
  state.users.filter(user => user.active)
);

const activeUsers = useUserStore(getActiveUsers);`}
                            </pre>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">❌ Avoid</h4>
                          <div className="bg-gray-900 rounded-lg p-3">
                            <pre className="text-gray-100 text-xs">
                              {`const activeUsers = useUserStore(state => 
  state.users.filter(user => user.active)
);`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Batch Related Updates</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Combine related state updates into a single setState call to reduce the number of re-renders.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2">✅ Good</h4>
                          <div className="bg-gray-900 rounded-lg p-3">
                            <pre className="text-gray-100 text-xs">
                              {`function handleSubmit(data: FormData) {
  useFormStore.setState(state => ({
    ...state,
    data,
    isValid: validate(data),
    isDirty: false,
    lastSaved: Date.now()
  }));
}`}
                            </pre>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">❌ Avoid</h4>
                          <div className="bg-gray-900 rounded-lg p-3">
                            <pre className="text-gray-100 text-xs">
                              {`function handleSubmit(data: FormData) {
  useFormStore.setState(s => ({ ...s, data }));
  useFormStore.setState(s => ({ ...s, isValid: validate(data) }));
  useFormStore.setState(s => ({ ...s, isDirty: false }));
  useFormStore.setState(s => ({ ...s, lastSaved: Date.now() }));
}`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
