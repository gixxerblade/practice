import asyncio
import time

class SyncDriver:

    def __init__(self, name):
          self.name = name
          self.urls = []
          for i in range(5):
              self.urls.append(f'url{i}')

    def download(self, url: str):
          time.sleep(1)
          print(f'{self.name} downloaded {url}')

    def prepare(self):
        for url in self.urls:
            self.download(url)

    def run(self):
        self.prepare()
        for url in self.urls:
            yield f'{self.name}-{url}'


class AsyncDriver:

    def __init__(self, name):
        self.name = name
        self.urls = []
        for i in range(5):
            self.urls.append(f'url{i}')

    async def download(self, url: str):
        await asyncio.sleep(1)
        print(f'{self.name} downloaded {url}')

    async def prepare(self):
        tasks = [self.download(url) for url in self.urls]
        await asyncio.gather(*tasks)

    async def run(self):
        await self.prepare()
        for url in self.urls:
            yield f'{self.name}-{url}'


async def process_generator(results):
    async for item in results:
        await process_to_db(item)


async def process_to_db(url: str):
    """simulates the method that creates or updates a record in the database"""
    print(f'processed {url}')


async def async_main():
    rhel = AsyncDriver("RHEL")
    debian = AsyncDriver("Debian")

    drivers = [rhel, debian]

    tasks = [driver.prepare() for driver in drivers]

    await asyncio.gather(*tasks)


def sync_main():
    rhel = SyncDriver("RHEL")
    debian = SyncDriver("Debian")

    drivers = [rhel, debian]
    for driver in drivers:
        driver.prepare()


if __name__ == '__main__':
    sync_start_time = time.time()
    sync_main()
    print("--- %s seconds ---" % (time.time() - sync_start_time))
    async_start_time = time.time()
    asyncio.run(async_main())
    print("--- %s seconds ---" % (time.time() - async_start_time))
