package com.ms1;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Header;

public interface Ms2Client {

  @GET("/ms2/testms2")
  public Call<ResponseString> getms2(@Header("Authorization") String auth);
}
