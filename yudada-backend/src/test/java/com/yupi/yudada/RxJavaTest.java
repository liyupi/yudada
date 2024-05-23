package com.yupi.yudada;

import io.reactivex.Flowable;
import io.reactivex.schedulers.Schedulers;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.concurrent.TimeUnit;

@SpringBootTest
public class RxJavaTest {

    @Test
    public void test() throws InterruptedException {
        // 创建数据流
        Flowable<Long> flowable = Flowable.interval(1, TimeUnit.SECONDS)
                .map(i -> i + 1)
                .subscribeOn(Schedulers.io()); // 指定执行操作用的线程池

        // 订阅 Flowable 流，并且打印出每个接受到的数字
        flowable
                .observeOn(Schedulers.io())
                .doOnNext(item -> System.out.println(item.toString()))
                .subscribe();

        // 主线程睡眠，以便观察到结果
        Thread.sleep(10000L);
    }
}
